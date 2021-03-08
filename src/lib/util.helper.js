
/**
 *
 * @param {*} gaObject
 *
 * Example object
 * {
 *  category: "Main Nav",
 *  action: "Click",
 *  label: "About Page"
 * }
 */
const pushEventGA = (gaObject) => {
  const isGA = typeof window.ga !== 'undefined'
  if (isGA) {
    window.ga(
      'send',
      'event',
      gaObject.category,
      gaObject.action,
      gaObject.label
    )
  }
  else
  {   console.log("When GA is live, this event will be pushed live.")
      console.log(gaObject);
  }
}

const copyrightYear = () =>
    (new Date()).getFullYear();

export {pushEventGA, copyrightYear}
