<template>
 <header class='header'>
            <slot name="left"></slot>

            <span class="header_title">
                <span class="header_titlr_text" ellipsis> {{title}}</span>
            </span>
      <slot name="right"></slot>

 </header>
  
</template>

<script>
export default {
    props: {title:String}
}
</script>

<style>

</style>
