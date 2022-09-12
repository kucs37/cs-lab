import { ResDaum, Section, Subject } from '@/interface/StudentInfo'

export const fakeClass: ResDaum[] = [
    {
        classroomId: 'CS112',
        fkSectionId: 1,
        fkStudentCode: '6510405814',
        fkSubjectId: 'cs112',
        section: { sectionId: 1, name: 'Fundamental Programming Concepts' } as Section,
        subject: { subjectId: 'cs112', name: 'Fundamental Programming Concepts' } as Subject,
    },
]
