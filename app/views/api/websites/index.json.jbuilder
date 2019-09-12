@websites.each do |website|
  json.set! website.id do
    json.partial! 'api/websites/website', website: website

  end
end
