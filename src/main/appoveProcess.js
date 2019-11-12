/**
 *
 */
function approveProcess() {
  for (var j = CONFIG.headerRow + 1; j <= sheet.getLastRow(); j += 1) {
    try {
      approveResponse(j);
    } catch (error) {
      console.error("approveProcess() : " + error);
      console.log("j: " + j);

      throw new Error(error);
    }
  }
}
