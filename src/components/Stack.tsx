import React, { use } from 'react';
import type { st } from '../type';

interface StackProps {
    stackPromise: Promise<st[]>;
}

const Stack = ({ stackPromise }: StackProps) => {
    const stacks = use(stackPromise);

    return (
        <div className="px-4 lg:px-8 py-12 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900">
                Explore the <span className="text-pink-600">Technologies</span>
            </h2>
            <p className="text-slate-500 mt-1 mb-8">
                Pick one technology per category to build your ideal stack.
            </p>

            <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 flex-1">
                    {stacks.map((item) => (
                        <div
                            key={item.id}
                            className="card bg-base-100 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="card-body p-5">
                                <div className="flex items-start justify-between">
                                    <div className="h-10 w-10 rounded-lg bg-slate-100 flex items-center justify-center">
                                        <img
                                            src={item.icon}
                                            alt={item.name}
                                            className="h-6 w-6 object-contain"
                                        />
                                    </div>
                                    <span className="badge badge-ghost badge-sm">
                                        {item.badge}
                                    </span>
                                </div>

                                <h4 className="card-title text-base mt-2">
                                    {item.name}
                                </h4>

                                <p className="text-sm text-slate-500">
                                    {item.description}
                                </p>

                                <div className="flex items-center gap-2 mt-2 text-xs">
                                    <span className="badge badge-outline badge-sm">
                                        {item.category}
                                    </span>
                                    <span className="badge badge-outline badge-sm">
                                        {item.difficulty}
                                    </span>
                                    <span className="flex items-center gap-1 text-amber-500 font-medium ml-auto">
                                        ★ {item.rating}
                                    </span>
                                </div>

                                <button className="btn btn-sm mt-3 border-none text-white bg-slate-900 hover:bg-slate-800">
                                    Add to Stack
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="w-full lg:w-64 border border-dashed border-slate-300 rounded-xl p-4">
                    <h3 className="font-semibold text-slate-800 mb-1">Your Stack</h3>
                    <p className="text-sm text-slate-400 mb-3">No technologies selected yet.</p>
                    <div className="border border-dashed border-slate-200 rounded-lg h-16 flex items-center justify-center text-sm text-slate-400">
                        Your stack is empty.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stack;