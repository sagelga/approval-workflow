(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{220:function(e,n,t){"use strict";t.r(n);var l=t(0),o=Object(l.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("/**")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Pull the value from the sheet, and put it into the "),t("em",[e._v("response")]),e._v(" Object.")])]),e._v(" "),t("li",[t("p",[e._v("DEBUG NOTE : If the error of : 'pullValue() : Exception: Range not found'. Make sure that there is a value in the "),t("code",[e._v(".cell")]),e._v(" thing")])]),e._v(" "),t("li",[t("p",[e._v("@param {Object} response")])]),e._v(" "),t("li",[t("p",[e._v('@returns {Object} response\n*/\nfunction pullValue(response) {\ntry {\nvar mandatoryColumn = ["status", "timestamp", "comments", "formUrl"];\nfor (var level = 1; level <= 2; level++) {\nfor (var i = 0; i < mandatoryColumn.length; i++) {\nresponse["step".concat(level)][\nmandatoryColumn[i]\n].value = sheet\n.getRange(response["step".concat(level)][mandatoryColumn[i]].cell)\n.getValue();\n}\n}')]),e._v(" "),t("p",[e._v('mandatoryColumn = ["id", "skipRow", "email", "requestType", "timestamp"];\nfor (i = 0; i < mandatoryColumn.length; i++) {\nresponse.payloads[mandatoryColumn[i]].value = sheet\n.getRange(response.payloads[mandatoryColumn[i]].cell)\n.getValue();\n}')]),e._v(" "),t("p",[e._v("response.step1.email.value = sheet\n.getRange(response.step1.email.cell)\n.getValue();\nresponse.payloads.bodyField = getBodyField(response.payloads.rowNumber);")]),e._v(" "),t("p",[e._v("var deadline = response.payloads.timestamp.value;\ndeadline = deadline.setDate(deadline.getDate() + CONFIG.responseTimeout);\nresponse.payloads.requestTimeout = deadline;")]),e._v(" "),t("p",[e._v('return response;\n} catch (error) {\nconsole.error("pullValue() : " + error);\nconsole.log(response);')]),e._v(" "),t("p",[e._v("throw new Error(error);\n}\n}")])])])])}),[],!1,null,null,null);n.default=o.exports}}]);