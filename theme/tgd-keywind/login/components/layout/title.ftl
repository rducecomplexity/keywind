<#import "../icon/tgd-logo.ftl" as tgdLogo>

<#macro kw>
  <div class="font-bold text-center text-2xl">
    <@tgdLogo.kw />
    ${kcSanitize(msg("loginTitleHtml", (realm.displayNameHtml!"")))?no_esc}
  </div>
</#macro>
