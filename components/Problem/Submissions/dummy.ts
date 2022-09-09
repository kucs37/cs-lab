import { SubmissionI } from '@/interface/Submission'

export const dummySubmissions: SubmissionI[] = [
    {
        order: 1,
        status: ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
        date: new Date('September 09, 2022 23:07:00'),
        code: `day = input()
        at = int(input())
        
        if day == 'Monday' :
          day = 1
        elif day == 'Tuesday' :
          day = 2
        elif day == 'Wednesday' :
          day = 3
        elif day == 'Thursday' :
          day = 4
        elif day == 'Friday' :
          day = 5
        elif day == 'Saturday' :
          day = 6
        elif day == 'Sunday' :
          day = 7
        else :
          day = 'error'
        
        if day == 'error' or at <= 0 or at > 31 :
          print('ERROR')
        
        else :
        
          diff = (at - 1 + day) % 7  
          if diff == 1 :
            at = 'Monday'
          elif diff == 2 :
            at = 'Tuesday'
          elif diff == 3 :
            at = 'Wednesday'
          elif diff == 4 :
            at = 'Thursday'
          elif diff == 5 :
            at = 'Friday'
          elif diff == 6 :
            at = 'Saturday'
          elif diff == 0 :
            at = 'Sunday' 
          print(at)`,
    },
    {
        order: 2,
        status: ['P', 'P', 'P', 'P', 'P', '-', 'P', 'P', 'P', 'P'],
        date: new Date('September 09, 2022 23:07:10'),
        code: `day = input()
        at = int(input())
        
        if day == 'Monday' :
          day = 1
        elif day == 'Tuesday' :
          day = 2
        elif day == 'Wednesday' :
          day = 3
        elif day == 'Thursday' :
          day = 4
        elif day == 'Friday' :
          day = 5
        elif day == 'Saturday' :
          day = 6
        elif day == 'Sunday' :
          day = 7
        else :
          day = 'error'
        
        if day == 'error' or at <= 0 or at > 31 :
          print('ERROR')
        
        else :
        
          diff = ((at - 1) % 7 + day) % 7  
          if diff == 1 :
            at = 'Monday'
          elif diff == 2 :
            at = 'Tuesday'
          elif diff == 3 :
            at = 'Wednesday'
          elif diff == 4 :
            at = 'Thursday'
          elif diff == 5 :
            at = 'Friday'
          elif diff == 6 :
            at = 'Saturday'
          elif diff == 7 :
            at = 'Sunday' 
          print(at)`,
    },
    {
        order: 3,
        status: ['P', 'P', 'P', 'P', 'P', '-', 'P', 'P', 'P', 'P'],
        code: `day = input()
        at = int(input())
        
        if day == 'Monday' :
          day = 1
        elif day == 'Tuesday' :
          day = 2
        elif day == 'Wednesday' :
          day = 3
        elif day == 'Thursday' :
          day = 4
        elif day == 'Friday' :
          day = 5
        elif day == 'Saturday' :
          day = 6
        elif day == 'Sunday' :
          day = 7
        else :
          day = 'error'
        
        if day == 'error' or at <= 0 or at > 31 :
          print('ERROR')
        
        else :
        
          diff = (at - 1 + day) % 7  
          if diff == 1 :
            at = 'Monday'
          elif diff == 2 :
            at = 'Tuesday'
          elif diff == 3 :
            at = 'Wednesday'
          elif diff == 4 :
            at = 'Thursday'
          elif diff == 5 :
            at = 'Friday'
          elif diff == 6 :
            at = 'Saturday'
          elif diff == 7 :
            at = 'Sunday' 
          print(at)`,
          date: new Date('September 09, 2022 10:07:00'),
    },
    {
        order: 4,
        status: ['-', '-', '-', '-', '-', '-', '-', 'P', 'P', 'P'],
        code: `day = input()
        at = int(input())
        
        if day == 'Monday' :
          day = 1
        elif day == 'Tuesday' :
          day = 2
        elif day == 'Wednesday' :
          day = 3
        elif day == 'Thursday' :
          day = 4
        elif day == 'Friday' :
          day = 5
        elif day == 'Saturday' :
          day = 6
        elif day == 'Sunday' :
          day = 7
        else :
          day = 'error'
        
        if day == 'error' or at <= 0 or at > 31 :
          print('ERROR')
        
        else :
        
          diff = (at - 1 + day) % 7  
          if diff == 1 :
            at = 'Monday'
          elif diff == 2 :
            at = 'Tuesday'
          elif diff == 3 :
            at = 'Wednesday'
          elif diff == 4 :
            at = 'Thursday'
          elif diff == 5 :
            at = 'Friday'
          elif diff == 6 :
            at = 'Saturday'
          elif diff == 7 :
            at = 'Sunday' 
          print(at)`,
          date: new Date('September 09, 2022 22:07:00'),
    },
    {
        order: 5,
        status: ['-', '-', '-', 'P', '-', '-', '-', 'P', 'P', 'P'],
        code: `day = input()
        at = int(input())
        
        if day == 'Monday' :
          day = 1
        elif day == 'Tuesday' :
          day = 2
        elif day == 'Wednesday' :
          day = 3
        elif day == 'Thursday' :
          day = 4
        elif day == 'Friday' :
          day = 5
        elif day == 'Saturday' :
          day = 6
        elif day == 'Sunday' :
          day = 7
        else :
          day = 'error'
        
        if day == 'error' or at <= 0 or at > 31 :
          print('ERROR')
        
        else :
        
          diff = (at - day - 1)  % 7 
          if diff == 1 :
            at = 'Monday'
          elif diff == 2 :
            at = 'Tuesday'
          elif diff == 3 :
            at = 'Wednesday'
          elif diff == 4 :
            at = 'Thursday'
          elif diff == 5 :
            at = 'Friday'
          elif diff == 6 :
            at = 'Saturday'
          elif diff == 7 :
            at = 'Sunday' 
          print(at)`,
          date: new Date('September 09, 2022 20:07:00'),
    },
]
