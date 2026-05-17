/**
 * Prestige Kollur · Velimela / Tellapur–Kollur concierge leads → Sheet (Web App POST).
 *
 * 1. Spreadsheet URL: …/spreadsheets/d/<THIS_PART>/edit … → paste into SPREADSHEET_ID
 * 2. Create tab named exactly LEADS_SHEET_NAME (or change the constant).
 * 3. Deploy → Web app → Execute as: Me, Who has access: Anyone → use the /exec URL in ENQUIRY_SCRIPT_URL.
 *
 * Never use SpreadsheetApp.getActiveSpreadsheet() here: Web App runs have no “active” spreadsheet → null appendRow crash.
 */

const SPREADSHEET_ID = "PASTE_SHEET_ID_FROM_URL";
const LEADS_SHEET_NAME = "Leads";

function jsonOut(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON,
  );
}

function doPost(e) {
  try {
    var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    var sheet = ss.getSheetByName(LEADS_SHEET_NAME);

    if (!sheet) {
      return jsonOut({
        ok: false,
        error: 'No tab named "' + LEADS_SHEET_NAME + '" — rename the sheet tab or LEADS_SHEET_NAME.',
      });
    }

    var raw =
      e.postData !== undefined && e.postData !== null && e.postData.contents
        ? e.postData.contents
        : "{}";
    var data = JSON.parse(raw);

    sheet.appendRow([
      new Date(),
      data.name || "",
      data.phone || "",
      data.interest || "",
      data.message || "",
      data.source !== undefined && data.source !== "" ? data.source : "Website",
    ]);

    return jsonOut({ ok: true, success: true });
  } catch (err) {
    var message = err.message ? err.message : String(err);
    return jsonOut({ ok: false, success: false, error: message });
  }
}

/** Optional: opening the Web App URL in a browser (GET) returns JSON instead of “doGet missing”. */

function doGet() {
  return jsonOut({
    ok: true,
    hint:
      "POST JSON: { name, phone, interest, message, source } — see scripts/google-apps-script/concierge-leads-webapp.gs",
  });
}
