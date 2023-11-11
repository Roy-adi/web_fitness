export const exerciseOptions = {
    method: 'GET', 
    headers: {
        'X-RapidAPI-Key': 'bbd88aff22msh90ad6b35e74aff1p19927fjsn0e74ff8a8f80',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
  };


  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };