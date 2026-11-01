import{n as o,v as i}from"./index-B-qZFwWZ.js";async function l(t,n=""){try{return(await o(i,{model:"gemini-2.0-flash",systemInstruction:n?{parts:[{text:n}]}:void 0}).generateContent(t)).response.text()}catch(r){console.error("Vertex AI Detailed Error:",r);const e=r.message||String(r);return e.includes("403")?`Error: Access Denied (403). Please verify Blaze plan is active and Vertex AI is enabled in the Google Cloud Console. Details: ${e}`:e.includes("404")?`Error: Model Not Found (404). Gemini 2.0 Flash might not be available in your project's region. Try checking the "Firebase AI Logic" settings in the console. Details: ${e}`:e.includes("auth")?`Auth Error: Please confirm Anonymous Authentication is ENABLED in your Firebase Console (Build > Authentication > Sign-in method). Details: ${e}`:`AI Error: ${e}. Please check console for full stack trace.`}}async function c(t){if(!t||t.length<50)return null;const n=`
    Analyze this "MOM SDHO" document text and find the project "Type" (Methodology).
    Options: "BAST Only", "Simple", "Complex".
    Look for the "Type" section where one of these is checked. Usually there is a checkbox like [x] or similar next to the chosen type.

    Document Text excerpt:
    ${t.substring(0,6e3)}

    Return ONLY the exact matched name: "BAST Only", "Simple", or "Complex". If you cannot be sure, return "Unknown".
  `;try{const r=await l(n,"You are a precise document parser. Your goal is to identify the project methodology from MOM documents."),e=r==null?void 0:r.trim().replace(/[^a-zA-Z ]/g,"");return e.includes("BAST Only")?"BAST Only":e.includes("Simple")?"Simple":e.includes("Complex")?"Complex":null}catch(r){return console.error("Methodology inference error:",r),null}}export{c as i};
