document.addEventListener('DOMContentLoaded', () => {
    // Example functionality: Load vocabulary dynamically
    if (document.body.classList.contains('memorize-page')) {
      loadVocabulary();
    } else if (document.body.classList.contains('interactive-training-page')) {
      initializeTraining();
    } else if (document.body.classList.contains('glossary-page')) {
      loadGlossary();
    }
  
    function loadVocabulary() {
      // Example vocabulary data
      const vocabulary = [
        { word: 'Aberration', definition: 'A departure from what is normal or expected.' },
        { word: 'Belligerent', definition: 'Hostile and aggressive.' },
        // Add more vocabulary items here
      ];
  
      const list = document.getElementById('vocabulary-list');
      list.innerHTML = '';
      vocabulary.forEach(item => {
        const div = document.createElement('div');
        div.className = 'item';
        div.innerHTML = <strong>${item.word}</strong><p>${item.definition}</p>;
        list.appendChild(div);
      });
    }
  
    function initializeTraining() {
      const activities = document.getElementById('training-activities');
      activities.innerHTML = '<p>Interactive training activities will be added here.</p>';
    }
  
    function loadGlossary() {
      const glossary = [
        { word: 'Aberration', definition: 'A departure from what is normal or expected.' },
        { word: 'Belligerent', definition: 'Hostile and aggressive.' },
        // Add more glossary items here
      ];
  
      const list = document.getElementById('glossary-list');
      list.innerHTML = '';
      glossary.forEach(item => {
        const div = document.createElement('div');
        div.className = 'item';
        div.innerHTML = <strong>${item.word}</strong><p>${item.definition}</p>;
        list.appendChild(div);
      });
    }
  });