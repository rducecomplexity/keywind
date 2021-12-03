<#import "../icon/pixon-logo.ftl" as pixonLogo>

<#macro kw>
  <div class="font-bold text-center text-2xl">
    <@pixonLogo.kw />
    ${kcSanitize(msg("loginTitleHtml", (realm.displayNameHtml!"")))?no_esc}
  </div>
</#macro>
