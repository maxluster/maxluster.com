module SiteHelpers

  def page_title
    title = "Set your site title in /helpers/site_helpers.rb"
    if data.page.title
      title = data.page.title + " | " + title
    end
    title
  end
  
  def page_description
    if data.page.description
      description = data.page.description
    else
      description = "Set your site description in /helpers/site_helpers.rb"
    end
    description
  end

  def cur_article
    if current_page.url == "/"
      article = blog.articles[0]
    else
      article = current_article
    end
    article
  end

  def nav_link(name, url, options={})
    #compare first level from root of current URL to target URL.
    options[:class] = 'active' if current_page.url.split('/')[1] == url.split('/')[1]
    link_to name, url, options
  end

  def section_title
    # 2nd tier subpages root/1/2/ will use their parent's title in the header. Affects articles.
    if  current_page.url.split('/').length <= 2
      return current_resource.data.title
    else
      return current_resource.parent.data.title
    end
  end


  def blog_asset_link(rel_url)
    if current_page.url == "/"
      url = "#{blog.articles[0].url}#{rel_url}"
    else
      url = rel_url
    end
    url
  end


end