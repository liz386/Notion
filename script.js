// Mercury Retrograde Tracker - Logic

function initializeWidget() {
  const today = new Date();
  let title = "Not in Retrograde";
  let desc = "Mercury is moving direct. Communication flows smoothly and plans move forward without delays.";
  let retrogradeInfo = "Mercury Retrograde Tracker • 2026";
  
  // Real Mercury Retrograde 2026 Dates: July 29 - August 21
  const retrograde1Start = new Date('2026-07-29');
  const retrograde1End = new Date('2026-08-21');
  
  // Phase breakdown for July 29 - Aug 21 retrograde period
  if (today >= retrograde1Start && today <= retrograde1End) {
    retrogradeInfo = "In Retrograde: Jul 29 - Aug 21, 2026";
    
    if (today >= new Date('2026-07-29') && today <= new Date('2026-07-31')) {
      title = "Phase 1: Pre-Retrograde Shadow";
      desc = "Mercury is slowing down before turning retrograde. Expect miscommunications, delayed messages, and tech glitches. Backup your data and double-check important details.";
    } else if (today >= new Date('2026-08-01') && today <= new Date('2026-08-05')) {
      title = "Phase 2: Retrograde Begins";
      desc = "Mercury officially turns retrograde. Review, revise, and reconsider. This is NOT a time to launch new projects—focus on editing and completing what's already started.";
    } else if (today >= new Date('2026-08-06') && today <= new Date('2026-08-13')) {
      title = "Phase 3: Peak Retrograde";
      desc = "Maximum chaos potential. Communication breakdowns are likely. Reunions with old friends or exes may occur. Stay flexible and avoid major decisions.";
    } else if (today >= new Date('2026-08-14') && today <= new Date('2026-08-21')) {
      title = "Phase 4: Retrograde Wind Down";
      desc = "Mercury is preparing to turn direct. Clarity begins returning. Use this time to finalize plans and tie up loose ends before moving forward.";
    } else if (today > new Date('2026-08-21') && today <= new Date('2026-09-10')) {
      title = "Phase 5: Shadow Period";
      desc = "Mercury is direct but still in the shadow zone. Effects of retrograde linger. Proceed with caution before the shadow completely clears on Sept 10.";
    }
  }
  
  // Update DOM
  const titleElement = document.getElementById('phase-title');
  const descElement = document.getElementById('phase-desc');
  const footerElement = document.getElementById('footer-info');
  
  if (titleElement) titleElement.innerText = title;
  if (descElement) descElement.innerText = desc;
  if (footerElement) footerElement.innerText = retrogradeInfo;
}

// Initialize on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeWidget);
} else {
  initializeWidget();
}
