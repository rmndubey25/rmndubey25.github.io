(() => {
  const roles = ["Malware analysis.", "Reverse engineering."];
  const el = document.getElementById("type");
  const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (still) { el.textContent = roles.join(" "); return; }

  let r = 0, i = 0, del = false;
  (function tick() {
    const word = roles[r];
    el.textContent = word.slice(0, i);
    let wait = del ? 35 : 75;
    if (!del && i === word.length) { del = true; wait = 1600; }
    else if (del && i === 0) { del = false; r = (r + 1) % roles.length; wait = 350; }
    else i += del ? -1 : 1;
    setTimeout(tick, wait);
  })();
})();
