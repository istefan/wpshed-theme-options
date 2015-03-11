<?php
/**
 * Include this line in your theme functions.php file
 */


if ( is_admin() ) {
	require_once( get_template_directory() . '/admin/inc/theme-options.php' );
}

