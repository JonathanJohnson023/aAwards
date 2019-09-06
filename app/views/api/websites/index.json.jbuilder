@websites.each do |website|
  json.set! website.id do
    json.partial! 'website', website: website
    json.
  end
end
