function onOpen() {
  // Show addon start button
  var submenuEntries = [];

  submenuEntries.push({
    name: "Run",
    functionName: "approveProcess"
  });

  submenuEntries.push({
    name: "Create required column",
    functionName: "createMandatoryColumn"
  });

  submenuEntries.push({
    name: "Sheet Preparation",
    functionName: "sheetPreparation"
  });

  submenuEntries.push({
    name: "Run specific row",
    functionName: "selectiveApprove"
  });

  spreadsheet.addMenu("Approval Addons", submenuEntries);
}
