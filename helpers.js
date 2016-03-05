(function () {
  if (!window.kwc_table_helpers) {
    var m = {};

    m.isChildOf = function (child, parent) {
      var currentNode = child.parentNode;
      while (currentNode !== null && currentNode !== parent) {
        currentNode = currentNode.parentNode;
      }
      return currentNode === parent;
    };

    m.getParentNode = function (child, parentName) {
      var currentNode = child.parentNode;
      var parentNodeName = parentName.toLowerCase();
      while (currentNode !== null && currentNode.nodeName.toLocaleLowerCase() !== parentNodeName) {
        currentNode = currentNode.parentNode;
      }
      return currentNode;
    };

    window.kwc_table_helpers = m;
  }
})()