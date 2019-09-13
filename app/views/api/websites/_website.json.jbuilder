json.extract! website, :id, :title, :url, :description, :score_avg, :author_id
json.author_name User.find_by(id: website.author_id).username
json.screenshotPhotos website.screenshot_photos.map { |file| url_for(file) } if website.screenshot_photos.attached?
json.coverPhoto  url_for(website.cover_photo) if website.cover_photo.attached?
json.thumbnailPhoto url_for(website.thumbnail_photo) if website.thumbnail_photo.attached?