json.extract! website, :id, :title, :url, :description, :score_avg, :author_id
json.author_name User.find_by(id: website.author_id).username


if website.thumbnail_photo.attached?
  json.thumbnail url_for(website.thumbnail_photo) 
else
  json.thumbnail nil
end

if website.cover_photo.attached?
  json.cover  url_for(website.cover_photo) 

else
  json.cover nil
end

if website.screenshot_photos.attached?
  json.screenshots website.screenshot_photos.map { |file| url_for(file) }
else
  json.screenshots nil
end