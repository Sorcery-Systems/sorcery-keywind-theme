<#macro kw>
  <#if properties.background??>
    <body class="p-8 bg-secondaryDarker bg-fixed bg-cover bg-center" style="background-image: url('${url.resourcesPath}/${properties.background}'); background-attachment: fixed;">
      <div class="font-main flex relative min-h-screen items-center justify-center">
        <#nested>
      </div>
    </body>
  <#else>
    <body class="p-8 font-main bg-secondaryDarker flex flex-col items-center justify-center min-h-screen">
      <#nested>
    </body>
  </#if>
</#macro>
