export interface GetLabs {
    resCode: string
    resData: ResDaum[]
    msg: string
  }
  
  export interface ResDaum {
    labId: string
    name: string
    fkSubjectId: string
    status: number
    sectionId: string
    sectionName: string
  }
  