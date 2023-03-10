function personReducer(person, action) {
  switch(action.type){
    case 'updated' : {
      /*
       * 구조 분해 할당
         const prev = action.prev;
         const current = action.current; 
       */
      const {prev, current} = action;
      
      return {      
        ...person, 
        mentors: person.mentors.map(mentor => {
          if(mentor.name === prev) {
            return {...mentor, name: current};
          } 
          return mentor;
        })
      };
    }
    case 'added' : {
      const {name, title} = action;

      return {
        ...person, 
        mentors : [...person.mentors, {name, title}]
      };
    }
  }
}