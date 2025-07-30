<script>
    import Hero from "$lib/components/Hero.svelte";
    import Section from "$lib/components/Section.svelte";
    import OurWork from "$lib/components/OurWork.svelte";
    import Testimonial from "$lib/components/Testimonial.svelte";
    import BlogSection from "$lib/components/BlogSection.svelte";
    import Contact from "$lib/components/Contact.svelte";
    import Service from "$lib/components/Service.svelte"

    let { data } = $props();
    console.log(data.posts);

</script>

<Hero/>
<Section />
<Service />
<OurWork />
<Testimonial />
<BlogSection posts={data.posts}/>
<Contact />
    