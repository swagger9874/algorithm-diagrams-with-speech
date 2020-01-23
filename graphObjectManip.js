function init(){
var $ = go.GraphObject.make;
myDiagram = $(go.Diagram, "myDiagramDiv",
  {
    // initialcontentalignment = diagram ilk açıldığında nerede duracak?
    initialContentAlignment: go.Spot.Center,
    "undoManager.isEnabled": true
  });

// eklenen nodelar bu stili kullanıcak
function nodeStyle() {
  return [
    // The Node.location comes from the "loc" property of the node data,
    // converted by the Point.parse static method.
    // If the Node.location is changed, it updates the "loc" property of the node data,
    // converting back using the Point.stringify static method.
    new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
    {
      // the Node.location is at the center of each node
      locationSpot: go.Spot.Center
    }
  ];
}

// default template
myDiagram.nodeTemplateMap.add("Step",
  $(go.Node, "Table", nodeStyle(),
  $(go.Panel, "Auto",
  $(go.Shape, "Rectangle",{
    fill: "#00A9C9", strokeWidth:0
  },new go.Binding("figure","figure"),
    new go.Binding("location", "loc").makeTwoWay(),
    new go.Binding("fill", "fill")),
  $(go.TextBlock, "Basamak", {
    font: "bold 11pt Helvetica, Arial, sans-serif",
    stroke: "whitesmoke",
    margin: 8,
    maxSize: new go.Size(160,NaN),
    wrap: go.TextBlock.WrapFit,
    editable: true
  },new go.Binding("text").makeTwoWay()),
  $(go.TextBlock, "no-key", {
    font: "bold 11pt Helvetica, Arial, sans-serif",
    stroke: "black",
    visible: true,
    name: "key",
    alignment: new go.Spot(0.5,1,0,4)
  },new go.Binding("text","key"), new go.Binding("visible","visible"))
  )
  ));
  myDiagram.nodeTemplateMap.add("Conditional",
  $(go.Node, "Table", nodeStyle(),
    // the main object is a Panel that surrounds a TextBlock with a rectangular Shape
    $(go.Panel, "Auto",
      $(go.Shape, "Diamond",
        { fill: "#00A9C9", strokeWidth: 0},
        new go.Binding("figure", "figure"),
        new go.Binding("fill", "fill")),
      $(go.TextBlock, "Eğer", {
          font: "bold 11pt Helvetica, Arial, sans-serif",
          stroke: "whitesmoke",
          margin: 8,
          maxSize: new go.Size(160, NaN),
          wrap: go.TextBlock.WrapFit,
          editable: true
        },
    ),
    // Burası Node'un Altında Çıkan Key Değerlerini Gösteren Text
    new go.Binding("text").makeTwoWay()),
        $(go.TextBlock, "no-key", {
          font: "bold 11pt Helvetica, Arial, sans-serif",
          stroke: "black",
          name: "key",
          alignment: new go.Spot(0.5,1,0,-4)
        },new go.Binding("text","key")),
    // Burası Eğer Bloğunun İçindeki Evet Okunun Yerini Gösteren E Harfi Çizmek için
    $(go.TextBlock, "E", {
      font: "bold 11pt Helvetica, Arial, sans-serif",
      stroke: "black",
      alignment: new go.Spot(1,0.5,-14,0),
      //alignmentFocus: go.Spot.BottomLeft,
      margin: 0
    },/*new go.Binding("text","key")*/),
    // Burası Eğer Bloğunun İçindeki Hayır Okunun Yerini Gösteren H Harfi Çizmek için
    $(go.TextBlock, "H", {
      font: "bold 11pt Helvetica, Arial, sans-serif",
      stroke: "black",
      alignment: new go.Spot(0,0.5,14,0),
      //alignmentFocus: go.Spot.BottomLeft,
      margin: 0
    },/*new go.Binding("text","key")*/),
    makePort("T", go.Spot.Top, go.Spot.Top, false, true),
    makePort("L", go.Spot.Left, go.Spot.Left, true, true),
    makePort("R", go.Spot.Right, go.Spot.Right, true, true),
    makePort("B", go.Spot.Bottom, go.Spot.Bottom, true, false)
  ));
  myDiagram.nodeTemplateMap.add("Start",
    $(go.Node, "Table", nodeStyle(),
      $(go.Panel, "Auto",
        $(go.Shape, "Circle",
          { minSize: new go.Size(40, 40), fill: "#79C900", strokeWidth: 0 },
          new go.Binding("fill", "fill")),
        $(go.TextBlock, "Başla", {
          font: "bold 11pt Helvetica, Arial, sans-serif",
          stroke: "whitesmoke"
        },
          new go.Binding("text")),
        $(go.TextBlock, "no-key", {
          font: "bold 11pt Helvetica, Arial, sans-serif",
          stroke: "black",
          name: "key",
          alignment: new go.Spot(0.5,1,0,5)
        },new go.Binding("text","key"))
      )
  ));
  myDiagram.nodeTemplateMap.add("End",
    $(go.Node, "Table", nodeStyle(),
      $(go.Panel, "Auto",
        $(go.Shape, "Circle",
          { minSize: new go.Size(40, 40), fill: "#DC3C00", strokeWidth: 0 },
          new go.Binding("fill", "fill")),
        $(go.TextBlock, "Bitir", {
          font: "bold 11pt Helvetica, Arial, sans-serif",
          stroke: "whitesmoke"
        },
          new go.Binding("text")),
          $(go.TextBlock, "no-key", {
            font: "bold 11pt Helvetica, Arial, sans-serif",
            stroke: "black",
            name: "key",
            alignment: new go.Spot(0.5,1,0,4)
          },new go.Binding("text","key"))
      )
    ));
  myDiagram.nodeTemplateMap.add("Comment",
    $(go.Node, "Auto", nodeStyle(),
      $(go.Shape, "File",
        { fill: "#EFFAB4", strokeWidth: 0 },
        new go.Binding("fill", "fill")),
      $(go.TextBlock, "Yorum",
        {
          font: "bold 11pt Helvetica, Arial, sans-serif",
          stroke: "whitesmoke",
          margin: 5,
          maxSize: new go.Size(200, NaN),
          wrap: go.TextBlock.WrapFit,
          textAlign: "center",
          editable: true,
          font: "bold 12pt Helvetica, Arial, sans-serif",
          stroke: '#454545'
        },
        new go.Binding("text").makeTwoWay()),
        $(go.TextBlock, "no-key", {
          font: "bold 11pt Helvetica, Arial, sans-serif",
          stroke: "black",
          name: "key",
          alignment: new go.Spot(0.5,1,0,4)
        },new go.Binding("text","key"))
      // no ports, because no links are allowed to connect with a comment
    ));

    // myDiagram.linkTemplate (link template = bağlantıların nasıl olacağını tekte belirleme)
    myDiagram.linkTemplate =
        $(go.Link, 
          {
            routing : go.Link.AvoidsNodes,
            corner : 20},
            $(go.Shape),
            $(go.Shape, { toArrow: "Standard" })
            );
    

  myPalette = $(go.Palette, "myPaletteDiv",{
    scrollsPageOnFocus: false,
    nodeTemplateMap: myDiagram.nodeTemplateMap,
    model: new go.GraphLinksModel([
      {category: "Start", text: "Başla"},
      {category: "Step", text: "Basamak"},
      {category: "Conditional", text: "Eğer\n"},
      {category: "End", text: "Bitir"},
      {category: "Comment", text: "Yorum"}
    ])
  });

myDiagram.model = $(go.GraphLinksModel,{
  linkFromPortIdProperty: "fromPort",
  linkToPortIdProperty: "toPort"
});

//var node = myDiagram.

// var node = myDiagram.findNodeForKey("Alpha");
// console.log(node.data);

// myDiagram.startTransaction("decrease scale");

// var itr = myDiagram.nodes;
// while(itr.next()){
//     var node = itr.value;
//     if(node.data.key == "Beta") continue;
//     node.scale = 0.4;
// }

// myDiagram.commitTransaction("decrease scale");


// var selectionButton = document.getElementById("selectionButton");
// if(selectionButton){
// selectionButton.addEventListener("click", function() {
//   myDiagram.startTransaction("change color");
//   var it = myDiagram.selection.iterator;
//   while (it.next()) {
//     var node = it.value;
//     var shape = node.findObject("SHAPE");
//     // If there was a GraphObject in the node named SHAPE, then set its fill to red:
//     if (shape !== null) {
//       shape.fill = "red";
//     }
//   }
//   myDiagram.commitTransaction("change color");
// });
// }else
// console.log("olmadı " + Boolean(selectionButton));

// var node = myDiagram.findNodeForKey("Alpha")
//     var model = myDiagram.model
//     model.startTransaction("change name")
//     model.setDataProperty(node.data,"key","Ahmeddo")
//     model.commitTransaction("change name")


// nodeların sağ, sol, üst ve altından ok çıkmasını sağlayan porting kodları
function makePort(name, align, spot, output, input){
  var horizontal = align.equals(go.Spot.Top) || align.equals(go.Spot.Bottom);
  return $(go.Shape,
    {
      fill: "transparent",
      strokeWidth: 0,
      width: horizontal ? NaN : 2,
      height: !horizontal ? NaN : 2,
      alignment: align,
      stretch: (horizontal ? go.GraphObject.Horizontal : go.GraphObject.Vertical),
      portId: name,
      fromSpot: spot,
      fromLinkable: output,
      toSpot: spot,
      toLinkable: input
    });
}

// init sonu
}
function testCiz(){
  var nodes = [{category:"Step"},{category:"Start"},{category:"Conditional"},{category:"End"},{category:"Comment"}];
  var arrows = [{from:-2, to:-1},{from:-1, to:-3, toPort:"T"},{from:-3, to:-4, fromPort:"R"}];
  var model = myDiagram.model;
  model.startTransaction("Hepsini Koy");
  nodes.forEach(element => {
    model.addNodeData(element);
  });
  arrows.forEach(element =>{
    model.addLinkData(element);
  });
  //var node1 = model.findNodeDataForKey(-1);
  //model.setDataProperty(node1.data, "loc", "8.185 -158.064");
  model.commitTransaction("Hepsini Koy");
  model.setDataProperty(model.findNodeDataForKey(-1), "loc", "8.18 -158.064");
  model.setDataProperty(model.findNodeDataForKey(-2), "loc", "5.794221833694792 -271.57734493876615");
  model.setDataProperty(model.findNodeDataForKey(-3), "loc", "8.79983893106143 -48.128598022460935");
  model.setDataProperty(model.findNodeDataForKey(-4), "loc", "1.3026889534883743 92.04549290856652");
  model.setDataProperty(model.findNodeDataForKey(-5), "loc", "231.74218750000006 -219.0394877115885");
  
}

// basamak şeklini çizen fonksiyon (default şekil kullanılarak)
function kareCiz(){
  var model = myDiagram.model;
  //var node = {color:"#00A9C9", text:"Basamak", category:"Step", loc:(5,12)};
  var node = {category:"Step", text:"Basamak"};
  model.startTransaction("kareCiz");
  model.addNodeData(node);
  model.commitTransaction("kareCiz");
  console.log("Kare ...")
}
// başla şeklini çizen fonksiyon
function baslaCiz(){
  var model = myDiagram.model;
  var node = {category:"Start", text:"Başla"};
  model.startTransaction("baslaCiz");
  model.addNodeData(node);
  model.commitTransaction("baslaCiz");
  console.log("Basla..."); 
}
// eğer şeklini çizen fonksiyon
function egerCiz(){
  var model = myDiagram.model;
  var node = {category:"Conditional", text:"Eğer"};
  model.startTransaction("egerCiz");
  model.addNodeData(node);
  model.commitTransaction("egerCiz");
  console.log("Eğer...");
}
// bitir şeklini çizen fonksiyon
function bitirCiz(){
  var model = myDiagram.model;
  var node = {category:"End", text:"Bitir"};
  model.startTransaction("bitirCiz");
  model.addNodeData(node);
  model.commitTransaction("bitirCiz");
  console.log("Bitir...");
}
// Yorum şeklini çizen fonksiyon
function yorumCiz(){
  var model = myDiagram.model;
  var node = {category:"Comment", text:"Yorum"};
  model.startTransaction("yorumCiz");
  model.addNodeData(node);
  model.commitTransaction("yorumCiz");
  console.log("Yorum...");
}

