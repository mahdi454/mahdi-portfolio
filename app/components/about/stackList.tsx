import { MY_STACK, StackType } from '../../lib/data';
import Image from 'next/image';
import React from 'react';

const StackList = () => {
    return (
        <div className="flex flex-wrap gap-4 mt-5">
            {MY_STACK.map((item: StackType) => (
                <div
                    className="flex gap-2 items-center leading-none border border-[#005c5c] px-2.5 md:px-3 py-1 rounded-full h-9 md:h-10"
                    key={item.name}
                >
                    <Image
                        src={item.icon}
                        alt={item.name}
                        width={24}
                        height={24}
                        className="object-cover hidden md:block"
                    />
                    <Image
                        src={item.icon}
                        alt={item.name}
                        width={20}
                        height={20}
                        className="object-cover md:hidden"
                    />
                    <span className="capitalize text-sm md:text-base">
                        {item.name}
                    </span>
                </div>
            ))}
        </div>

    );
};

export default StackList;
