function iniciar_blockly() {
  workspace = Blockly.inject("blockly", {
    comments: false,
    collapse: false,
    grid: {
      spacing: 25,
      length: 5,
      colour: "#ccc",
      snap: true
    },
    horizontalLayout: true,
    media: "blockly/media/",
    oneBasedIndex: true,
    scrollbars: true,
    toolbox: document.getElementById("toolbox"),
    toolboxPosition: "start",
    trashcan: true,
    toolboxOptions: {
      color: true,
      inverted: true
    },
    zoom: {
      controls: true,
      wheel: true,
      startScale: 1.0,
      maxScale: 4,
      minScale: 0.25,
      scaleSpeed: 1.1
    }
  });
}
