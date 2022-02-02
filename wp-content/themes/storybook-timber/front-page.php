<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 *
 * To generate specific templates for your pages you can use:
 * /mytheme/views/page-mypage.twig
 * (which will still route through this PHP file)
 * OR
 * /mytheme/page-mypage.php
 * (in which case you'll want to duplicate this file and save to the above path)
 *
 * Methods for TimberHelper can be found in the /lib sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since    Timber 0.1
 */


$context = Timber::context();
$post = new TimberPost();
$context['posts'] = Timber::get_posts( array(
  'post_parent' => 0
) );
$posts = Timber::get_posts();

$filtered = array();
foreach ( $posts as $post ) {
  if ($post->post_parent === 0) {
    $filtered[] = $post;
  }
}
$context['posts'] = $filtered;
$context['post'] = $post;
$context['work_posts'] = Timber::get_posts('post_type=work');
$context['is_front_page'] = 'true';
$templates = array(
  'patterns/05-pages/page-types/page-' . $post->post_name . '.twig',
  'patterns/05-pages/page-types/front-page.twig'
);
Timber::render($templates, $context);
