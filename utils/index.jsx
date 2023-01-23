import { serialize } from 'next-mdx-remote/serialize';

export const formatDate = (dateString) => {
    const date = new Date(dateString).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    return date;
};

export const makeCategory = (slug)  => {
    if (typeof slug === 'string') {
        return slug.split('-').join(' ');
    }
    return '';
};

export const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};



export const serializeMarkdown = async (item) => {
    const body = await serialize(item.attributes.body);
    return {
        ...item,
        attributes: {
            ...item.attributes,
            body,
        },
    };
};