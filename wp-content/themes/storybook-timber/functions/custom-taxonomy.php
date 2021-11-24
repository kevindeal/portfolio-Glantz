<?php
/**
 *
 * @file
 * Register custom taxonomies.
 *
 * @package WordPress
 */

/**
 * Registers custom taxonomies.
 */
/* ------------------------------------ *\
    $TAXONOMIES
\* ------------------------------------ */
function cptui_register_my_taxes() {
  /**
   * Taxonomy: Dish Types.
   */
  $labels = array(
    "name" => __( "Team Category", "sage" ),
    "singular_name" => __( "Team Category", "sage" ),
  );
  $args = array(
    "label" => __("Team Category", "sage" ),
    "labels" => $labels,
    "public" => true,
    "hierarchical" => true,
    "show_ui" => true,
    "show_in_menu" => true,
    "show_in_nav_menus" => false,
    "query_var" => true,
    "rewrite" => array( 'slug' => 'team_category', 'with_front' => true, ),
    "show_admin_column" => true,
    "show_in_quick_edit" => true,
    'show_in_rest' => true,
  );
  register_taxonomy("team_category", array( "team" ), $args );
}
add_action( 'init', 'cptui_register_my_taxes' );

function cptui_register_team_tags() {
  /**
   * Taxonomy: Dish Types.
   */
  $labels = array(
    "name" => __( "Team Tags", "sage" ),
    "singular_name" => __( "Team Tag", "sage" ),
  );
  $args = array(
    "label" => __("Team Tag", "sage" ),
    "labels" => $labels,
    "public" => true,
    "hierarchical" => true,
    "show_ui" => true,
    "show_in_menu" => true,
    "show_in_nav_menus" => false,
    "query_var" => true,
    "rewrite" => array( 'slug' => 'team_tag', 'with_front' => true, ),
    "show_admin_column" => true,
    "show_in_quick_edit" => true,
    'show_in_rest' => true,
  );
  register_taxonomy("team_tag", array( "team" ), $args );
}
add_action( 'init', 'cptui_register_team_tags' );



