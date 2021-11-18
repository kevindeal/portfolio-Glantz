<?php
/**
 *
 * @file
 * Register custom theme functions.
 *
 * @package WordPress
 */

// ADDS DEBUG COMMENTS WHEN WP_DEBUG IS TRUE
if (function_exists('\Djboris88\Timber\initialize_filters')) {
  \Djboris88\Timber\initialize_filters();
}

/**
 * Enable SVG upload support.
 */
function cc_mime_types($mimes) {
  $mimes['svg'] = 'image/svg+xml';
  return $mimes;
}
add_filter('upload_mimes', 'cc_mime_types');

/**
 * ACF Options Page
 */
if (function_exists('acf_add_options_page')) {
  acf_add_options_page(array(
    'page_title' => 'Theme Settings',
    'menu_title' => 'Theme Settings',
    'menu_slug' => 'theme-general-setting',
    'position' => 20,
    'capability' => 'edit_posts',
    'icon_url' => 'dashicons-admin-tools',
    'redirect' => false
  ));

  function acf_timber_context($context) {
    $context['options'] = get_fields('option');
    return $context;
  }
  add_filter('timber_context', 'acf_timber_context');
}
