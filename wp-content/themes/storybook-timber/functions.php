<?php
/**
 * Timber starter-theme
 * https://github.com/timber/starter-theme
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since   Timber 0.1
 */

/**
 * If you are installing Timber as a Composer dependency in your theme, you'll need this block
 * to load your dependencies and initialize Timber. If you are using Timber via the WordPress.org
 * plug-in, you can safely delete this block.
 */
$composer_autoload = __DIR__.'/vendor/autoload.php';
if (file_exists($composer_autoload)) {
  require_once $composer_autoload;
  $timber = new Timber\ Timber();
}

/**
 * This ensures that Timber is loaded and available as a PHP class.
 * If not, it gives an error message to help direct developers on where to activate
 */
if (!class_exists('Timber')) {
  add_action('admin_notices',
    function() {
      echo '<div class="error"><p>Timber not activated. Make sure you activate the plugin in <a href="'.esc_url(admin_url('plugins.php#timber')).'">'.esc_url(admin_url('plugins.php')).'</a></p></div>';
    }
  );

  add_filter('template_include',
    function($template) {
      return get_stylesheet_directory().'/static/no-timber.html';
    }
  );

  return;
}

/**
 * Sets the directories (inside your theme) to find .twig files
 */
Timber::$dirname = array('templates', 'views');

/**
 * By default, Timber does NOT autoescape values. Want to enable Twig's autoescape?
 * No prob! Just set this value to true
 */
Timber::$autoescape = false;

/**
 * We're going to configure our theme inside of a subclass of Timber\Site
 * You can move this to its own file and include here via php's include("MySite.php")
 */
class StarterSite extends Timber\ Site {
  /** Add timber support. */
  public function __construct() {
    add_action('after_setup_theme', array($this, 'theme_supports'));
    add_filter('timber/context', array($this, 'add_to_context'));
    add_filter('timber/twig', array($this, 'add_to_twig'));
    add_action('wp_enqueue_scripts', array($this, 'load_scripts'));

    parent::__construct();
  }

  /** This is where you add some context
   *
   * @param string $context context['this'] Being the Twig's {{ this }}.
   */
  public function add_to_context($context) {
    $context['foo'] = 'bar';
    $context['site'] = $this;

    /* Global */
    $context['logo_link'] = "/";
    $context['logo_src'] = "logo-full.svg";
    $context['logo_alt'] = "Southleft Logo";

    /* Menus */
    $context['primary_nav'] = new TimberMenu('Primary Navigation');
    $context['footer_nav'] = new TimberMenu('Footer Navigation');
    return $context;
  }

  public function theme_supports() {
    // Add default posts and comments RSS feed links to head.
    add_theme_support('automatic-feed-links');

    /*
     * Let WordPress manage the document title.
     * By adding theme support, we declare that this theme does not use a
     * hard-coded <title> tag in the document head, and expect WordPress to
     * provide it for us.
     */
    add_theme_support('title-tag');

    /*
     * Enable support for Post Thumbnails on posts and pages.
     *
     * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
     */
    add_theme_support('post-thumbnails');

    /*
     * Switch default core markup for search form, comment form, and comments
     * to output valid HTML5.
     */
    add_theme_support(
      'html5',
      array(
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
      )
    );

    /*
     * Enable support for Post Formats.
     *
     * See: https://codex.wordpress.org/Post_Formats
     */
    add_theme_support(
      'post-formats',
      array(
        'aside',
        'image',
        'video',
        'quote',
        'link',
        'gallery',
        'audio',
      )
    );

    add_theme_support('menus');

    /* Register menus. */
    register_nav_menus([
      'primary_nav' => __('Primary Navigation', 'timber'),
      'footer_nav' => __('Footer Navigation', 'timber')
    ]);
  }

  /**
   * BEM function to pass in bem style classes.
   */
  public function bem_classes($context, $block_class, $element_class = '', $modifiers = array(), $extra = array()) {
    $base = $block_class;
    $mods = null;
    $xtra = null;
    if (isset($element_class) && $element_class != null) {
      $base = $base . '__' . $element_class;
    }
    if (isset($modifiers) && !empty($modifiers)) {
      if (!is_array($modifiers)) {
        $mods .= ' ' . $base . '--' . $modifiers;
      } else {
        foreach ($modifiers as $mod) {
          if ($mod != null) {
            $mods .= ' ' . $base . '--' . $mod;
          }
        };
      }
    }
    if (isset($extra) && !empty($extra)) {
      if (!is_array($extra)) {
        $xtra .= ' ' . $extra;
      } else {
        foreach ($extra as $xtra_item) {
          if ($xtra_item != null) {
            $xtra .= ' ' . $xtra_item;
          }
        };
      }
    }
    return $base . $mods . $xtra;
  }

  /**
   * Add Attributes function to pass in multiple attributes including bem style classes.
   */
  public function add_attributes($context, $additional_attributes = array()) {
    $attribute = null;
    if (isset($additional_attributes) && !empty($additional_attributes)) {
      foreach ($additional_attributes as $key => $value) {
        $attribute .= ' ' . $key . '=' . $value;
      };
    }
    return $attribute;
  }

  /** This is where you can add your own functions to twig.
   *
   * @param string $twig get extension.
   */
  public function load_scripts() {
    $js_version = filemtime( get_template_directory() . '/dist/js/scripts.js' );
    wp_enqueue_script('wp-scripts',  get_stylesheet_directory_uri() . '/dist/js/scripts.js', array(), $js_version, true);
  }

  public function add_to_twig($twig) {
    $twig->addExtension(new Twig\ Extension\ StringLoaderExtension());
    $twig->addFunction(new Twig_SimpleFunction('bem_classes', array($this, 'bem_classes'), array('needs_context' => true), array('is_safe' => array('html'))) );
    $twig->addFunction(new Twig_SimpleFunction('add_attributes', array($this, 'add_attributes'), array('needs_context' => true), array('is_safe' => array('html'))) );
    return $twig;
  }
}

new StarterSite();

// Namespaces
add_filter('timber/loader/loader', function($loader) {
  $loader->addPath(__DIR__ . "/patterns/01-atoms", "atoms");
  $loader->addPath(__DIR__."/patterns/02-molecules", "molecules");
  $loader->addPath(__DIR__."/patterns/03-organisms", "organisms");
  $loader->addPath(__DIR__."/patterns/04-templates", "templates");
  return $loader;
});

/**
 * Register Custom Theme Functions.
 */
$register_theme_functions = __DIR__.'/functions/custom-theme-functions.php';
if (file_exists($register_theme_functions)) {
  require_once $register_theme_functions;
}

/**
 * Register Custom Post Types.
 */
$register_custom_content_types = __DIR__.'/functions/custom-content-types.php';
if (file_exists($register_custom_content_types)) {
  require_once $register_custom_content_types;
}

/**
 * Register Custom Taxonomies.
 */
// $register_custom_taxonomy = __DIR__.'/functions/custom-taxonomy.php';
// if (file_exists($register_custom_taxonomy)) {
//   require_once $register_custom_taxonomy;
// }

/**
 * ACF Save json files
 */
function my_acf_json_save_point($path) {
  $path = get_stylesheet_directory() . '/acf-json';
  return $path;
}
add_filter('acf/settings/save_json', 'my_acf_json_save_point');
