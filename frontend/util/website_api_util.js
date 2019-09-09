export const fetchWebsites = () => (
  $.ajax({
    method: 'GET',
    url: '/api/websites'
  })
);

export const fetchWebsite = id => (
  $.ajax({
    method: 'GET',
    url: `/api/websites/${id}`
  })
);

export const createVote = vote => (
  $.ajax({
    method: 'POST',
    url: '/api/votes',
    data: { vote }
  })
);

export const createWebsite = websiteForm => (
  $.ajax({
    method: 'POST',
    url: '/api/websites',
    data: websiteForm,
  })
);

export const fetchTopWebsite = () => (
  $.ajax({
    method: 'GET',
    url: `/api/websites/top`
  })
);

window.fetchTopWebsite = fetchTopWebsite