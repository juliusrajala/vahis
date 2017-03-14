import $ from 'jquery';

function generateFilterText(topic) {
  return `Kirjoitukset aiheesta: ${topic}`;
}

(function(){
  const $topicList = $('.SideBar-Topic');
  const $posts = $('.BlogPost');
  const $activeFilter = $('.BlogPosts-ActiveFilter');

  $topicList.click(ev => {
    ev.preventDefault();

    const target = $(ev.currentTarget);
    $activeFilter.empty();
    $activeFilter.append(generateFilterText(target.attr('data-topic')));
    $activeFilter.addClass('BlogPosts-ActiveFilter--Active');

    if($(target).hasClass('SideBar-Topic--Active')) {
      $posts.removeClass('BlogPost--Hidden');
      $topicList.removeClass('SideBar-Topic--Active')
      $activeFilter.removeClass('BlogPosts-ActiveFilter--Active');
      return;
    }

    $posts.removeClass('BlogPost--Hidden');
    $topicList.removeClass('SideBar-Topic--Active');

    $posts.map((idx, el) => {
      $(target).addClass('SideBar-Topic--Active');
      !$(el).attr('data-topics').includes($(target).attr('data-topic')) &&
        $(el).addClass('BlogPost--Hidden');
    });

  })
})();
