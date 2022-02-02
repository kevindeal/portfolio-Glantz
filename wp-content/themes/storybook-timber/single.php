<?php
/**
 * The Template for displaying all single posts
 *
 * Methods for TimberHelper can be found in the /lib sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since    Timber 0.1
 */

$context = Timber::context();
$post = new TimberPost();
$context['post'] = $post;
$related = $post->meta( 'related_posts' );
$related_posts = Timber::get_posts( $related );
$args = array(
  'post_type'      => $post->post_type,
  'posts_per_page' => 3,
  'orderby'        => 'rand',
  'post__not_in'   => array($post->ID),
);
$context['related'] = $related_posts;
$templates = array(
  'patterns/05-pages/post-types/single-' . $post->ID . '.twig',
  'patterns/05-pages/post-types/single-' . $post->post_type . '.twig',
  'patterns/05-pages/post-types/single.twig'
);

Timber::render($templates, $context);
