export default async function handler(req, res) {
  const { link } = req.query;
  if (!link) {
    return res.status(400).json({ error: "Please provide a link to bypass." });
  }

  try {
    let modifiedLink = link;

    // Apply bypass logic based on the link content
    if (link.includes("spdmteam.com/key-system-1?hwid=")) {
      modifiedLink = link.replace(
        'https://spdmteam.com/key-system-1?hwid=',
        'https://spdmteam.com/api/keysystem?hwid='
      ).replace('&zone=Europe/Rome', '&zone=Europe/Rome&advertiser=lootlabs&OS=ios');
    } else if (link.includes("spdmteam.com/key-system-2?hwid=")) {
      modifiedLink = "https://loot-link.com/s?mYit";
    } else if (link.includes("spdmteam.com/key-system-3?hwid=")) {
      modifiedLink = "https://loot-link.com/s?qlbU";
    }

    // Return the modified (bypassed) link
    res.json({ bypassedLink: modifiedLink });
  } catch (error) {
    console.error("Error in bypassing logic:", error);
    res.status(500).json({ error: "An error occurred while bypassing." });
  }
}
