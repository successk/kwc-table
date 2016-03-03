(function () {
  if (!window.kwc_table_helpers) {
    m = {}

    m.isChildOf = function (child, parent) {
      var currentNode = child.parentNode
      while (currentNode !== null && currentNode !== parent) {
        currentNode = currentNode.parentNode
      }
      return currentNode === parent
    }

    window.kwc_table_helpers = m
  }
})()