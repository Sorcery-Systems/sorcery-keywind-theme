<#macro kw checked=false label="" name="" rest...>
  <div class="flex items-center">
    <input
      <#if checked>checked</#if>

      class="border-secondaryVeryLight h-4 rounded text-primary w-4 focus:ring-primaryVeryLight focus:ring-opacity-50"
      id="${name}"
      name="${name}"
      type="checkbox"

      <#list rest as attrName, attrValue>
        ${attrName}="${attrValue}"
      </#list>
    >
    <label class="ml-2 text-secondary text-sm" for="${name}">
      ${label}
    </label>
  </div>
</#macro>
