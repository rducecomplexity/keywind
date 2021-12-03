<#import "../icon/rduce-logo.ftl" as rduceLogo>

<#macro kw>
  <div class="font-bold text-center text-2xl">
    <@rduceLogo.kw />
    ${kcSanitize(msg("loginTitleHtml", (realm.displayNameHtml!"")))?no_esc}
  </div>
</#macro>
