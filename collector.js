// Canvas Discussion Collector Bookmarklet - Version 1.0

(function(){
  if (!window._discussionCollector) {
    if (!/\/discussion_topics\//.test(window.location.pathname)) {
      alert('⚠️ This does not look like a Canvas discussion page. Please navigate to a discussion.');
      return;
    }

    window._discussionCollector = {
      posts: [],
      mode: null,
      pageCount: 0
    };

    let mode = prompt("What do you want to grab?\n1 = Only Replies\n2 = Only Initial Posts\n3 = Both");
    if (['1','2','3'].includes(mode)) {
      window._discussionCollector.mode = mode;
      alert('✅ Selection saved. Now start grabbing pages! Click this bookmarklet on each page. When done, click \"Finish Collection\" at the bottom right of your screen.');
    } else {
      alert('Invalid selection. Please try again.');
      window._discussionCollector = null;
      return;
    }

    let finishButton = document.createElement('button');
    finishButton.innerText = '🚀 Finish Collection';
    finishButton.id = 'finishCollectorBtn';
    finishButton.style.position = 'fixed';
    finishButton.style.bottom = '20px';
    finishButton.style.right = '20px';
    finishButton.style.zIndex = 9999;
    finishButton.style.padding = '10px 15px';
    finishButton.style.backgroundColor = '#4CAF50';
    finishButton.style.color = 'white';
    finishButton.style.border = 'none';
    finishButton.style.borderRadius = '8px';
    finishButton.style.cursor = 'pointer';
    finishButton.onclick = function(){
      if (window._discussionCollector.posts.length === 0) {
        alert('No posts collected yet!');
        return;
      }
      let allText = window._discussionCollector.posts.join('\n\n---\n\n');
      let action = prompt('🎯 Collection complete! How do you want to export it?\n1 = Copy to Clipboard\n2 = Download as .txt file');
      if (action === '1') {
        navigator.clipboard.writeText(allText).then(() => {
          alert('✅ All posts copied to clipboard!');
        }).catch(err => {
          prompt('Copy manually:', allText);
        });
      } else if (action === '2') {
        let blob = new Blob([allText], {type:'text/plain'});
        let url = URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.href = url;
        a.download = 'discussion_collection.txt';
        a.click();
        URL.revokeObjectURL(url);
      } else {
        alert('Invalid option.');
      }
      window._discussionCollector = null;
      document.getElementById('finishCollectorBtn').remove();
    };
    document.body.appendChild(finishButton);
    return;
  }

  if (!/\/discussion_topics\//.test(window.location.pathname)) {
    alert('⚠️ You are not on a Canvas discussion page.');
    return;
  }

  // Auto-expand hidden replies
  document.querySelectorAll('button,a').forEach(btn => {
    if (/show replies|view replies|expand/i.test(btn.innerText)) {
      btn.click();
    }
  });

  function getText(selector) {
    let nodes = document.querySelectorAll(selector);
    let text = '';
    nodes.forEach(node => {
      text += node.innerText + "\n\n---\n\n";
    });
    return text.trim();
  }

  let mode = window._discussionCollector.mode;
  let text = '';
  if (mode === '1') {
    text = getText('[aria-label^="Reply to"], .discussion-reply');
  } else if (mode === '2') {
    text = getText('[role="listitem"], .discussion_post, .discussion-entry');
  } else if (mode === '3') {
    text = getText('[role="listitem"], .discussion_post, .discussion-entry') + "\n\n---\n\n" + getText('[aria-label^="Reply to"], .discussion-reply');
  }

  if (text.trim() !== '') {
    window._discussionCollector.posts.push(text);
    window._discussionCollector.pageCount++;
    alert(`✅ Page ${window._discussionCollector.pageCount} collected! Now move to the next page number and click the bookmarklet again.`);
  } else {
    alert('⚠️ No posts found on this page. Move to the next page or finish.');
  }
})();
