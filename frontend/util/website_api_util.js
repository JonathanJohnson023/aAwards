export const fetchWebsites = data => (
  $.ajax({
    method: 'GET',
    url: 'api/websites',
    data
  })
);

export const fetchWebsite = id => (
  $.ajax({
    method: 'GET',
    url: `api/websites/${id}`
  })
);

export const createVote = vote => (
  $.ajax({
    method: 'POST',
    url: 'api/reviews',
    data: { vote }
  })
);

export const createWebsite = websiteForm => (
  $.ajax({
    method: 'POST',
    url: 'api/websites',
    data: websiteForm,
  })
);
