<?php
/**
 *
 * @file
 * Register custom content types.
 *
 * @package WordPress
 */

function cptui_register_my_cpts() {
  
  
  
  
  /**
   * Post Type: Potfolio pieces.
   */



 

  $labels = array(
    "name" => __("Portfolio", "sage" ),
    "singular_name" => __( "Work", "sage" ),
  );
  $args = array(
    "label" => __( "Work", "sage" ),
    "labels" => $labels,
    "description" => "Portfolio sites.",
    "public" => true,
    "publicly_queryable" => true,
    "show_ui" => true,
    "show_in_rest" => true,
    "rest_base" => "work",
    "has_archive" => true,
    "show_in_menu" => true,
    "show_in_nav_menus" => true,
    "exclude_from_search" => false,
    "capability_type" => "post",
    "map_meta_cap" => true,
    "hierarchical" => false,
    "rewrite" => array( "slug" => "work", "with_front" => true ),
    'has_archive' => 'portfolio',
    "query_var" => false,
    "menu_position" => 4,
    "menu_icon" => "dashicons-building",
    "supports" => array( "title", "editor", "thumbnail", "revisions", "excerpt", "link", "image" ),
    "taxonomies" => array( "work_category", "work_tag" ),
  );
  register_post_type( "work", $args );
}
add_action( 'init', 'cptui_register_my_cpts', 0 );  



