/**
 * This is the main entry point for dynamically loading this extension.
 * Use it to defer the loading to the point when it's really needed.
 * @return {Promise<{}>}
 */
export default function () {
  return import('./static')
}
