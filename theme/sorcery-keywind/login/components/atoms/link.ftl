<#macro kw color="" component="a" size="" rest...>
  <#switch color>
    <#case "primary">
      <#assign colorClass="text-primary hover:text-primaryLighter">
      <#break>
    <#case "secondary">
      <#assign colorClass="text-secondary hover:text-secondaryDarker">
      <#break>  
    <#case "secondary-light">
      <#assign colorClass="text-secondary hover:text-secondaryDarker">
      <#break>
    <#case "secondary-dark">
      <#assign colorClass="text-secondaryLighter hover:text-secondaryVeryLight">
      <#break>
    <#default>
      <#assign colorClass="text-primary hover:text-primaryLighter">
  </#switch>

  <#switch size>
    <#case "small">
      <#assign sizeClass="text-sm">
      <#break>
    <#default>
      <#assign sizeClass="">
  </#switch>

  <${component}
    class="<#compress>${colorClass} ${sizeClass} inline-flex</#compress>"

    <#list rest as attrName, attrValue>
      ${attrName}="${attrValue}"
    </#list>
  >
    <#nested>
  </${component}>
</#macro>
