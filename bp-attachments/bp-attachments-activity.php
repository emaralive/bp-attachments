<?php
/**
 * BP Attachments Activity Functions.
 *
 * @package \bp-attachments\bp-attachments-activity
 *
 * @since 1.0.0
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Register JavaScripts and Styles for Activity Front-End context.
 *
 * @since 1.0.0
 */
function bp_attachments_activity_register_front_end_assets() {
	$bp_attachments = buddypress()->attachments;

	wp_register_script(
		'bp-attachments-activity',
		$bp_attachments->js_url . 'front-end/activity.js',
		array(
			'wp-dom-ready',
		),
		$bp_attachments->version,
		true
	);

	$path = sprintf(
		'/%1$s/%2$s/%3$s',
		bp_rest_namespace(),
		bp_rest_version(),
		buddypress()->attachments->id
	);

	wp_localize_script(
		'bp-attachments-activity',
		'bpAttachmentsActivitySettings',
		array(
			'path'            => ltrim( $path, '/' ),
			'root'            => esc_url_raw( get_rest_url() ),
			'nonce'           => wp_create_nonce( 'wp_rest' ),
			'allowedExtTypes' => bp_attachments_get_allowed_media_exts( '', true ),
		)
	);
}

/**
 * Registers the Nouveau Activity Action button.
 *
 * @since 1.0.0
 *
 * @param array $buttons The array containing the Nouveau button params.
 * @return array The array containing the Nouveau button params.
 */
function bp_attachments_activity_button( $buttons = array() ) {
	return array_merge(
		$buttons,
		array(
			'bpAttachments' => array(
				'id'      => 'bpAttachments',
				'caption' => __( 'Attach Media', 'bp-attachments' ),
				'icon'    => 'dashicons-admin-media',
				'order'   => 10,
				'handle'  => 'bp-attachments-activity',
			),
		)
	);
}

/**
 * Loads the Activity Attachments button only in Nouveau & for the activity context.
 *
 * @since 1.0.0
 */
function bp_attachments_activity_loader() {
	if ( 'nouveau' !== bp_get_theme_compat_id() || ! bp_is_current_component( 'activity' ) ) {
		return;
	}

	add_filter( 'bp_nouveau_activity_buttons', 'bp_attachments_activity_button' );
	add_action( 'bp_attachments_register_front_end_assets', 'bp_attachments_activity_register_front_end_assets', 3 );
}
add_action( 'bp_screens', 'bp_attachments_activity_loader' );
