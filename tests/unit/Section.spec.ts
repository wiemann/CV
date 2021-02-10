import { shallowMount } from "@vue/test-utils";
import Section from "@/components/Section.vue";

describe("Section.vue", () => {
  it("renders the element", () => {
    const wrapper = shallowMount(Section, {
      propsData: {
        title: "Here goes the title"
      },
      slots: {
        default: "This is the description."
      }
    });

    expect(wrapper.find("h2").text()).toMatch("Here goes the title");
    expect(wrapper.find(".main").text()).toMatch("This is the description.");
  });
});
