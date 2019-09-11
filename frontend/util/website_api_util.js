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

export const createWebsite = website => (
  $.ajax({
    method: 'POST',
    url: '/api/websites',
    data: { website }
  })
);

export const fetchTopWebsite = () => (
  $.ajax({
    method: 'GET',
    url: `/api/website/top`

  })
);
window.fetchWebsites = fetchWebsites
window.fetchTopWebsite = fetchTopWebsite