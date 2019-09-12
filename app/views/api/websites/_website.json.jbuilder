json.extract! website, :id, :title, :url, :description, :img_url, :score_avg, :author_id
json.author_name User.find_by(id: website.author_id).username
