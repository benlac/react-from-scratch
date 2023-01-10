/**
 *
 * @param {string} type Type of the element to add
 * @param {object} props
 * @param  {...object|string} children
 */
export function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) => {
        return typeof child === "object" ? child : createTextElement(child);
      }),
    },
  };
}

/**
 * Create a node of type text
 * @param {string} text
 * @returns {{type: string, props: {nodeValue: *, children[]}}}
 */
function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  };
}
