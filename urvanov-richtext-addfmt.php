<?php
/*
Plugin Name: Urvanov richtext addfmt
Description: Additional format buttons for richtext in Gutenberg editor.
Author: Urvanov
Version: 0.1
Author URI: https://urvanov.ru
*/


defined( 'ABSPATH' ) or die( 'No script kiddies please!' );


function urvanov_richtext_addfmt_script_register() {
    wp_register_script(
        'urvanov-richtext-addfmt-js',
        plugins_url( 'urvanov-richtext-addfmt.js', __FILE__ ),
        array( 'wp-rich-text' , 'wp-element', 'wp-editor')
    );
}
add_action( 'init', 'urvanov_richtext_addfmt_script_register' );

function urvanov_richtext_addfmt_enqueue_assets_editor() {
    wp_enqueue_script( 'urvanov-richtext-addfmt-js');
}
add_action( 'enqueue_block_editor_assets', 'urvanov_richtext_addfmt_enqueue_assets_editor' );


?>