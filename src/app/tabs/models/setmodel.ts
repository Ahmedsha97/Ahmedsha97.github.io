export interface NewUserList {
    page:        number;
    per_page:    number;
    total:       number;
    total_pages: number;
    data:        NewData[];
    support:     Support;
  }
  
  export interface NewData {
    id:             number;
    name:           string;
    year:           number;

  }
  
  export interface Support {
    url:  string;
    text: string;
  }
  